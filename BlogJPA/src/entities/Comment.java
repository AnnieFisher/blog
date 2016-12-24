package entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Comment implements Serializable{
	private static final long serialVersionUID =1L;
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;

	@Temporal(TemporalType.DATE)
	@Column(name = "post_date")
	private Date postDate;
	
	private String body;
	
	@ManyToOne
	@JoinColumn(name="post_id",referencedColumnName="id")
	@JsonBackReference
	private Post post;

	public Comment(){}

	public Comment(int id, Date postDate, String body, Post post) {
		super();
		this.id = id;
		this.postDate = postDate;
		this.body = body;
		this.post = post;
	}

	public int getId() {
		return id;
	}

	public Date getPostDate() {
		return postDate;
	}

	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Comment [id=" + id + ", postDate=" + postDate + ", body=" + body + "]";
	};

	
	
	

}
