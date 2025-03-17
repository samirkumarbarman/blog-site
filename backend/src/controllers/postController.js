import * as postService from "../services/postService.js";

export const createNewPost = async (req, res) =>{
    try {
        const post = await postService.createPost(req.body);
        res.status(201).json({message:"Post created successfully", post});
    } catch (error) {
        res.status(500).json({message :error.message});
    }
};

export const getPosts = async(req, res) =>{
    try {
        const posts = await postService.getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message :error.message});
    }
};

export const getPost = async (req, res) =>{
    try {
        const post = await postService.getPostById(req.params.id);

        if (!post) {
            return res.status(404).json({message:"Post not Found"});
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message :error.message});
    }
};

export const updatePostDetails = async ( req, res ) =>{
    try {
        const post = await postService.updatePost(req.params.id, req.body);

        if (!post) {
            return res.status(404).json({message:"Post not found"});
        }
        res.status(200).json({message:"Post updated successfully", post});
    } catch (error) {
        res.status(500).json({message :error.message});
    }
};

export const deletePostById = async ( req, res ) => {
    try {
        const post = await postService.deletePost(req.params.id);
        
        if (!post ) {
            return res.status(404).json({message:"Post not found"});
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message :error.message});
    }
};