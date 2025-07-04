import fs from "fs";
import matter from "gray-matter";
import path from "path";
const postDirectory = path.join(process.cwd(), "docs");

export function getDoccuments() {
  if (!fs.existsSync(postDirectory)) {
    console.error(`Directory not found: ${postDirectory}`);
    return [];
  }

  const fileNames = fs.readdirSync(postDirectory);

  const allDoccuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  return allDoccuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
}
