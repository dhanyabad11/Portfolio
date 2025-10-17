export interface Project {
    id: string;
    title: string;
    description: string;
    link?: string;
}

export interface Post {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
}
