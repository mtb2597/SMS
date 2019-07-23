package exam.hello;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class A {
	
	private B obj1;
	
	
	@Autowired
	public void setObj1(B obj1) {
		System.out.println("basics are never out of fashion ... dont get ocnfused");
		this.obj1 = obj1;
	}
	
	@GetMapping("/invoice_select")
	public void f3(@RequestParam("y") int p)//assume single select
	{
	    obj1.SelectProduct1(p);
		
	}
	
	@GetMapping("/invoice_display")
	public Invoice f3(@RequestParam("y") String p)//assume single select
	{
	   return obj1.SelectInvoice();
		
	}
	
	@GetMapping("/invoice_qtystore")
	public void f6(@RequestParam("y") int p)//assume single select
	{
	    obj1.QuantityStore(p);
		
	}
	@PostMapping("/customer_login")
	public UserLogin CustomerLogin(@RequestBody String m) throws JsonParseException, JsonMappingException, IOException//assume single select
	{
		ObjectMapper mapper = new ObjectMapper();
		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		UserLogin obj = mapper.readValue(m, UserLogin.class);
	    return obj1.CheckCustomer(obj);
	}
	
	@PostMapping("/product_update")
	public void UpdateProduct(@RequestBody String p2) throws JsonParseException, JsonMappingException, IOException 
	{
		System.out.println(p2);
		ObjectMapper mapper = new ObjectMapper();
		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		Product obj = mapper.readValue(p2, Product.class);
	    obj1.UpdateProduct(obj);
	  
		
	}
	@PostMapping("/insert")
	public void insertProduct(@RequestBody String n) throws JsonParseException, JsonMappingException, IOException
	{
		ObjectMapper mapper = new ObjectMapper();
		mapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		Product obj = mapper.readValue(n, Product.class);
	    obj1.InsertProduct(obj);
		
	}
	
	@GetMapping("/product_mselect")
	public List<Product> getAllProduct(@RequestParam("y") String n) 
	{
		return obj1.AllProduct();
	}
	
	@GetMapping("/customer_mselect")
	public List<Customer_Details> getAllCustomer(@RequestParam("y") String n) 
	{
		return obj1.AllCustomer();
	}
	

	@GetMapping("/sales_mselect")
	public List<Sales> getAllSales(@RequestParam("y") String n) 
	{
		return obj1.AllSales();
	}
	
	
//	@GetMapping("/city_mselect")
	//public List<Customer_Details> getCustomer(@RequestParam("y") String n) 
	//{
		//return obj1.AllCustomer(n);
	//}


	@DeleteMapping("/product_delete")
	public void deleteProduct(@RequestParam("y") int x)
	{
		System.out.println(x);
		obj1.DeleteProduct(x);
	}
	
	@GetMapping("/product_select")
	public Product getProduct(@RequestParam("y") int n) 
	{
		return obj1.SelectProduct(n);
	}
}
