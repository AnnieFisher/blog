package entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Post implements Serializable{
	private static final long serialVersionUID =1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;

	@Temporal(TemporalType.DATE)
	@Column(name = "post_date")
	private Date postDate;
	
	@Column(name= "post_name")
	private String postName;
	
	private String body;
	
	@ManyToOne
	@JoinColumn(name="user_id",referencedColumnName="id")
	@JsonBackReference
	private Users user;
	
	@OneToMany(mappedBy="post",fetch=FetchType.EAGER,cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
	@JsonManagedReference
	private List<Comment> comments;
	
	public Post(){}

	public Post(int id, Date postDate, String postName, String body, Users user, List<Comment> comments) {
		super();
		this.id = id;
		this.postDate = postDate;
		this.postName = postName;
		this.body = body;
		this.user = user;
		this.comments = comments;
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

	public String getPostName() {
		return postName;
	}

	public void setPostName(String postName) {
		this.postName = postName;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", postDate=" + postDate + ", postName=" + postName + ", body=" + body + "]";
	}



	
}
