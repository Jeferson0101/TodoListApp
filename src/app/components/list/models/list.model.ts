import { TagPriority } from "../../tag/models/tag.model";

export interface IList {
    title: string;
    items?: IListItem[];
    id?: string;
}

export interface IListItem {
    title: string;
    priority: TagPriority;
    description?: string;
    subItems?: ISubItem[];
}

export interface ISubItem {
    title: string;
}