package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Invoice 
{
	@Id
	private int Product_Id;
	public int getProduct_Id() {
		return Product_Id;
	}
	public void setProduct_Id(int product_Id) {
		Product_Id = product_Id;
	}
	private String Product_Name;
	private int Quantity;
	public Invoice() {

	}
	public Invoice(int product_Id, String product_Name, int quantity, int price) {
		super();
		Product_Id = product_Id;
		Product_Name = product_Name;
		Quantity = quantity;
		Price = price;
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
	public int getPrice() {
		return Price;
	}
	public void setPrice(int price) {
		Price = price;
	}
	private int Price;

}
