package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Sales 
{
	@Id
	private int Product_Id;
	public Sales() {
	}
	public Sales(int product_Id, String product_Name, int quantity_Sold) {
		super();
		Product_Id = product_Id;
		Product_Name = product_Name;
		Quantity_Sold = quantity_Sold;
	}
	public int getProduct_Id() {
		return Product_Id;
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
	public int getQuantity_Sold() {
		return Quantity_Sold;
	}
	public void setQuantity_Sold(int quantity_Sold) {
		Quantity_Sold = quantity_Sold;
	}
	private String Product_Name;
	private int Quantity_Sold;

}
