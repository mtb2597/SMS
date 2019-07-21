package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;



@Entity
public class Product 
{
	@Id
	@JsonProperty("Product_Id")
	private int Product_Id;
	@JsonProperty("Product_Name")
	private String Product_Name;
	@JsonProperty("Quantity")
	private int Quantity;
	@JsonProperty("Price")
	private double Price;
	public int getProduct_Id() {
		return Product_Id;
	}
	public Product(int product_Id, String product_Name, int quantity, double price) {
		super();
		Product_Id = product_Id;
		Product_Name = product_Name;
		Quantity = quantity;
		Price = price;
	}
	public void setProduct_Id(int product_Id) {
		Product_Id = product_Id;
	}
	public String getProduct_Name() {
		return Product_Name;
	}
	public void setProduct_Name(String product_Name) {
		Product_Name = product_Name;
	}
	public int getQuantity() {
		return Quantity;
	}
	public void setQuantity(int quantity) {
		Quantity = quantity;
	}
	public double getPrice() {
		return Price;
	}
	public void setPrice(double price) {
		Price = price;
	}
	public Product() {
		
	}
	
	
}
