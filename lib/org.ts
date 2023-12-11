import fs from 'fs'
import path from 'path'
import reorg from '@orgajs/reorg'
import mutate from '@orgajs/reorg-rehype'
import html from 'rehype-stringify'
import { unified } from 'unified'
import parsePlugin from '@orgajs/reorg-parse'

export async function getData(path: string) {
  const fullPath = path
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const result = await unified().use(parsePlugin).use(mutate).use(html).process(fileContents)
  const content = result.toString()

  return content
}
