package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Invoice 
{
	@Id
	private int Product_Id;
	private String Product_Name;
	private int Quantity;
	private int Price;
	private int Total_Bill;
	private double Discount_Offered;
	private double Final_Amount;
	public Invoice() {
	
	}
	public Invoice(int product_Id, String product_Name, int quantity, int price, int total_Bill,
			double discount_Offered, double final_Amount) {
		super();
		Product_Id = product_Id;
		Product_Name = product_Name;
		Quantity = quantity;
		Price = price;
		Total_Bill = total_Bill;
		Discount_Offered = discount_Offered;
		Final_Amount = final_Amount;
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
	public int getTotal_Bill() {
		return Total_Bill;
	}
	public void setTotal_Bill(int total_Bill) {
		Total_Bill = total_Bill;
	}
	public double getDiscount_Offered() {
		return Discount_Offered;
	}
	public void setDiscount_Offered(double discount_Offered) {
		Discount_Offered = discount_Offered;
	}
	public double getFinal_Amount() {
		return Final_Amount;
	}
	public void setFinal_Amount(double final_Amount) {
		Final_Amount = final_Amount;
	}
	



}
