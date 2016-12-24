package controllers;

import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.BlogDAO;
import entities.Comment;
import entities.Post;
import entities.Users;

@RestController
public class BlogController {

	@Autowired
	BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private BlogDAO blogDAO;
	
	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping(){
		return "pong";
	}
	
	@RequestMapping(path = "user", method = RequestMethod.GET)
	public List<Users> indexUsers() {
		return blogDAO.indexUsers();
	}
	
	@RequestMapping(path = "user/{id}", method = RequestMethod.GET)
	public Users showUser(@PathVariable int id) {
		return blogDAO.showUser(id);
	}
	
	@RequestMapping(path = "user/{id}/posts",method = RequestMethod.GET)
	public Collection<Post> showPosts(@PathVariable int id){
		return blogDAO.showPosts(id);
	}
	
	@RequestMapping(path = "user/{id}/posts/{pId}",method = RequestMethod.GET)
	public Post showPost(@PathVariable int id, @PathVariable int pId) {
		return blogDAO.showPost(pId);
	}
	
	// get all posts for home page
	@RequestMapping(path = "post",method = RequestMethod.GET)
	public List<Post> indexPost(){
		return blogDAO.indexPosts();
	}
	
	@RequestMapping(path = "comment",method = RequestMethod.GET)
	public List<Comment> indexComment(){
		return blogDAO.indexComments();
	}
	
	// if i want to retrieve a single post for home page
	@RequestMapping(path = "post/{id}",method = RequestMethod.GET)
	public Post showPost(@PathVariable int id) {
		return blogDAO.showPost(id);
	}
	
	@RequestMapping(path = "posts/{id}/comment/",method = RequestMethod.GET)
	public Collection<Comment> showComments(@PathVariable int id){
		return blogDAO.showComments(id);
	}
	
	@RequestMapping(path = "user/{id}", method = RequestMethod.PUT)
	public void updateUser(@PathVariable int id, @RequestBody String userJSON) {
		ObjectMapper mapper = new ObjectMapper();
		Users user = null;
		try {
			user = mapper.readValue(userJSON, Users.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		blogDAO.update(id, user);
	}
	
	@RequestMapping(path ="user/{id}/posts/{pId}", method = RequestMethod.PUT)
	public void updatePost(@PathVariable int id, @RequestBody String postJSON){
		ObjectMapper mapper = new ObjectMapper();
		Post post = null;
		try{
			post = mapper.readValue(postJSON, Post.class);
		}catch(Exception e){
			e.printStackTrace();
		}
		blogDAO.update(id, post);
		
	}
	
	@RequestMapping(path= "posts/{id}/comment{id}", method = RequestMethod.PUT)
	public void updateComment(@PathVariable int id, @RequestBody String commentJSON){
		ObjectMapper mapper = new ObjectMapper();
		Comment comment = null;
		try{
			comment = mapper.readValue(commentJSON, Comment.class);
		}catch(Exception e) {
			e.printStackTrace();
		}
		blogDAO.update(id,  comment);
	}
	
	@RequestMapping(path = "user", method = RequestMethod.POST)
	public void createUser(@RequestBody String userJSON, HttpServletResponse res) {
		ObjectMapper mapper = new ObjectMapper();
		Users user = null;
		try {
			user = mapper.readValue(userJSON, Users.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		res.setStatus(201);
		blogDAO.create(user);
	}
	
	@RequestMapping(path = "user/{id}/posts", method = RequestMethod.POST)
	public void createPost(@PathVariable int id, @RequestBody String postJSON) {
		ObjectMapper mapper = new ObjectMapper();
		Post post = null;
		try{
			post = mapper.readValue(postJSON, Post.class);
		}catch(Exception e) {
			e.printStackTrace();
		}
		blogDAO.createPost(post,id);
	}
	
	@RequestMapping(path = "post/{id}/comments", method = RequestMethod.POST)
	public void createComment(@PathVariable int id, @RequestBody String commentJSON) {
		ObjectMapper mapper = new ObjectMapper();
		Comment comment = null;
		try{
			comment = mapper.readValue(commentJSON, Comment.class);
		}catch(Exception e) {
			e.printStackTrace();
		}
		blogDAO.createComment(comment, id);
		
	}
	
	
	@RequestMapping(path = "user/{id}", method = RequestMethod.DELETE)
	public void destroyUser(@PathVariable int id) {
		blogDAO.destroyUser(id);
	}
	
	@RequestMapping(path= "user/{id}/posts/{pId}",method = RequestMethod.DELETE)
	public void destroyPost(@PathVariable int id, @PathVariable int pId) {
		blogDAO.destroyPost(id, pId);
	}
	
	@RequestMapping(path = "post/{id}/comment/{cId}", method = RequestMethod.DELETE)
	public void destroyComment(@PathVariable int id, @PathVariable int cId) {
		blogDAO.destroyComment(id, cId);
	}
}
