import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';
import { get } from 'http';

const postsDirectory = path.join(process.cwd(), 'Blogpost');

export function getSortedPostsData() {
  // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
      
        return {
        id,
        title: matterResult.data.title,
         date: matterResult.data.date,
        };
    });
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
        return 1;
        }
        else {
        return -1;
        }
    });
    }
    //get one post
    export async function getPostData(id){
    
        const fullPath = path.join(postsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
        const contentHtml = processedContent.toString();
        return {
            id,
            contentHtml,
            title: matterResult.data.title,
            date: matterResult.data.date,
        
        }
        
    }