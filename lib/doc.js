import fs from "fs";
import matter from "gray-matter";
import path from "path";
const postDirectory = path.join(process.cwd(), "docs");

export function getDoccuments() {
  const fileNames = fs.readdirSync(postDirectory);

  const allDoccuments = fileNames.map((fileName) => {

    const id = fileName.replace(".md", "");
    const fullPath = path.join(postDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    console.log(matterResult);
 
  });
 
}
