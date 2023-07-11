import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'
import type { SiteConfig, TransformContext } from 'vitepress/dist/node'
import { SitemapStream } from 'sitemap'
import { isCI } from 'std-env'

// import { ogUrl } from './constants'

interface SitemapEntry {
  url: string
  lastmod?: number
}

// const cyberalienGithub = 'https://cyberalien.github.io'

const links: SitemapEntry[] = []

const hostname: string = isCI ? ''/* ogUrl */ : (process.env.HTTPS ? 'https://localhost/' : 'http://localhost:4173/')

export function transformHtml(code: string, id: string, { pageData }: TransformContext): string | void {
  if (!/[\\/]404\.html$/.test(id)) {
    let url = pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2')
    if (url.length && !url.endsWith('/'))
      url += '.html'

    links.push({
      url,
      lastmod: pageData.lastUpdated,
    })

    // homepage
    if (url === '/' || url === '') {
      return code.replace('<meta charset="utf-8">', `<meta charset="utf-8">
<link rel="canonical" href="${hostname}">
`)
    }

    // section entry
    if (url.endsWith('/')) {
      if (url === 'sponsors/') {
        return code.replace('<meta charset="utf-8">', `<meta charset="utf-8">
<link rel="canonical" href="${hostname}${url}">
`)
      }

      return code.replace('<meta charset="utf-8">', `<meta charset="utf-8">
<link rel="canonical" href="${hostname}${url}">
`)
    }

    // any page
    return code.replace('<meta charset="utf-8">', `<meta charset="utf-8">
<link rel="canonical" href="${hostname}${url}">
`)
  }
}

export async function buildEnd({ outDir }: SiteConfig) {
  // TODO: include here frequency and priority
  const sitemap = new SitemapStream({
    hostname,
  })
  const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
  sitemap.pipe(writeStream)
  links.forEach(link => sitemap.write(link))
  sitemap.end()
  await new Promise(resolve => writeStream.on('finish', resolve))
  await writeFile(resolve(outDir, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${hostname}sitemap.xml`.replace(/\\r\\n/g, '\n'), { encoding: 'utf-8' })
}
