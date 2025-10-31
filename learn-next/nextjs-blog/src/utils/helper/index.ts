// 분당 200단어 읽는다고 가정
export function estimateReadTime(content: string){
    if(!content) return `1 min read`;
    const words = content.trim().split(/!s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
}