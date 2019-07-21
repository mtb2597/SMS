package exam.hello;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer_Details {

	
	@Id
	private int Customer_Id;
	private String Customer_Name;
	private String Address;
	private String City;
	private String Pincode;
	private long Phone_No;
	private double Outstanding_Amount;
	public int getCustomer_Id() {
		return Customer_Id;
	}
	public void setCustomer_Id(int customer_Id) {
		Customer_Id = customer_Id;
	}
	public String getCustomer_Name() {
		return Customer_Name;
	}
	public void setCustomer_Name(String customer_Name) {
		Customer_Name = customer_Name;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getCity() {
		return City;
	}
	public void setCity(String city) {
		City = city;
	}
	public String getPincode() {
		return Pincode;
	}
	public void setPincode(String pincode) {
		Pincode = pincode;
	}
	public long getPhone_No() {
		return Phone_No;
	}
	public void setPhone_No(long phone_No) {
		Phone_No = phone_No;
	}
	public double getOutstanding_Amount() {
		return Outstanding_Amount;
	}
	public void setOutstanding_Amount(double outstanding_Amount) {
		Outstanding_Amount = outstanding_Amount;
	}
	public Customer_Details(int customer_Id, String customer_Name, String address, String city, String pincode,
			long phone_No, double outstanding_Amount) {
		super();
		Customer_Id = customer_Id;
		Customer_Name = customer_Name;
		Address = address;
		City = city;
		Pincode = pincode;
		Phone_No = phone_No;
		Outstanding_Amount = outstanding_Amount;
	}
	public Customer_Details() {
		
	}
	
	
	

}
