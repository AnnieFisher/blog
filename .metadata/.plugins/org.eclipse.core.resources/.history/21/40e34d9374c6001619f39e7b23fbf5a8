package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.BlogDAO;
import entities.Post;

@RestController
public class BlogController {

	@Autowired
	private BlogDAO blogDAO;
	
	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping(){
		return "pong";
	}
	
	@RequestMapping(path = "post",method = RequestMethod.GET)
	public List<Post> indexPost(){
		return blogDAO.indexPosts();
	}
	
	@RequestMapping(path = "post/{id}",method = RequestMethod.GET)
	public Post showPost(@PathVariable int id) {
		return blogDAO.showPost(id);
	}
	
	@RequestMapping(path ="post/{id}", method = RequestMethod.PUT)
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
	
	@RequestMapping(path = "post", method = RequestMethod.POST)
	public void createPost(@RequestBody String postJSON) {
		ObjectMapper mapper = new ObjectMapper();
		Post post = null;
		try{
			post = mapper.readValue(postJSON, Post.class);
		}catch(Exception e) {
			e.printStackTrace();
		}
		blogDAO.create(post);
	}
	
	@RequestMapping(path= "post/{id}",method = RequestMethod.DELETE)
	public void destroyPost(@PathVariable int id) {
		blogDAO.destroyPost(id);
	}
}
