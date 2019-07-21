package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class UserLogin 
{
	@Id
	@JsonProperty("User_Name")
	private String User_Name;
	@JsonProperty("Password")
	private String Password;
	public String getUser_Name() {
		return User_Name;
	}
	public void setUser_Name(String user_Name) {
		User_Name = user_Name;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public UserLogin(String user_Name, String password) {
		super();
		User_Name = user_Name;
		Password = password;
	}
	public UserLogin() 
	{
		
	}
	
	
	
}
