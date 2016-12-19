package data;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import entities.Post;

@Transactional
public class BlogDAO {

	@PersistenceContext
	private EntityManager em;
	
	public List<Post> indexPosts(){
		String query = "Select p from Post p";
		return em.createQuery(query,Post.class).getResultList();
	}
	
	public Post showPost(int id){
		return em.find(Post.class, id);
	}
	
	public Post create(Post post){
		em.persist(post);
		em.flush();
		return post;
	}
	
	public Post update(int id, Post post){
		Post managedPost = em.find(Post.class, id);
		managedPost.setBody(post.getBody());
		managedPost.setPostName(post.getPostName());
		managedPost.setPostDate(post.getPostDate());
		return managedPost;
	}
	
	public void destroyPost(int id){
		Post post = em.find(Post.class, id);
		em.remove(post);
	}
}
