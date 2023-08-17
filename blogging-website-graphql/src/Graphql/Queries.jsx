import {gql, GraphQLClient} from 'graphql-request'
import dotenv from 'dotenv';
dotenv.config();


export const graphcms = new GraphQLClient(process.env.GRAPH_CMS);


const category = `
    id,
    name,
    slug,
    color {css}
`


const comment = `
    id,
    name,
    email,
    comment
`


const post = `
    id,
    title,
    slug,
    coverPhoto {url},
    content {html},
    description,
    createdAt,
    updatedAt
`


// QUERY_SLUG_CATEGORIES is a query to retrieve the names and slugs of categories. It fetches the data using a categories field from the GraphQL schema.
// The last piece of code means that we'll be only exporting the name and slug value of any particular query be it from any category.
export const QUERY_SLUG_CATEGORIES= gql`
    {
        categories(){
            name,
            slug
        }
    }
`


// QUERY_POSTS is a query to retrieve detailed information about posts. It fetches data such as 
// post ID, title, slug, cover photo URL, content in HTML format, description, creation and update timestamps, 
// and related categories' details (using the categories field). The ${post} and ${category} placeholders are 
// replaced by the corresponding query fragments defined earlier.
export const QUERY_POSTS = gql`
    {
        posts(orderBy: updatedAt_DESC, first: 6){
            ${post}
            categories(){
                ${category}
            }
        }
    }
`



export const QUERY_POSTS_BY_CATEGORY = gql`
    query GetPostsByCategory($slug: String!){
        posts(
            orderBy: updatedAt_DESC,
            where: {categories_some: {slug: $slug}}
        ){
            ${post}
            categories(){
                ${category}
            }
        }
    }
` 



export const QUERY_SEARCH_POSTS = gql`
    query GetSearchPosts($slug: String!){
        posts(
            orderBy: updatedAt_DESC,
            where: {_search: $slug, AND: {slug_contains: "loreum"}}
        ){
            ${post}
            categories(){
                ${category}
            }
        }
    }
` 



export const QUERY_ONE_POST = gql`
    query GetOnePost($slug: String!){
        posts(
            where: {slug: $slug}
        ){
            ${post}
            categories(){
                ${category}
            }
        }
    }
`
