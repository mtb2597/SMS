package exam.hello;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class B {
	
	public int price;
	public int qty;
	public int pid;
	public int tot;
	public double discount;
	public double finalamt;
	private C obj1;
	private D obj2;
	private F obj3;
	private G obj4;
	private H obj5;
	
	@Autowired
	public void setObj1(C obj1) {
		System.out.println("repository wired to service ");
		this.obj1 = obj1;
	}

	@Autowired
	public void setObj5(H obj5) {
		System.out.println("repository wired to service ");
		this.obj5 = obj5;
	}

	@Autowired
	public void setObj4(G obj4) {
		System.out.println("repository wired to service ");
		this.obj4 = obj4;
	}
	
	@Autowired
	public void setObj3(F obj3) {
		System.out.println("repository wired to service ");
		this.obj3 = obj3;
	}


	@Autowired
	public void setObj2(D obj2) {
		System.out.println("repository wired to service 2 ");
		this.obj2 = obj2;
	}


	public B()
	{
		
		System.out.println("basics are never out of fashion");
	}


	public void InsertProduct(Product n) 
	{
		obj1.save(n);
	}



	public UserLogin CheckCustomer(UserLogin obj1) {

		Optional<UserLogin> x = obj2.findById(obj1.getUser_Name());
		UserLogin y = null;
		if(x.isPresent())
		{
			 y = x.get();  
			
		}
		 return y;
	}
	
	    public Product SelectProduct(int p) {
		Optional<Product> x = obj1.findById(p);
		Product y = null;
		if(x.isPresent())
		{
			 y = x.get();  
			
		}
		else
		{
			System.out.println("Item Not Found");	
		}
		 return y;
	    }



		public void UpdateProduct(Product obj)
		{
			System.out.println(obj.getQuantity());
			List<Product> x = obj1.findAll();
			Iterator it = x.iterator();
			while(it.hasNext())
			{
				Product p1 = (Product) it.next();
				if(p1.getProduct_Name().equals(obj.getProduct_Name()))
				{
					p1.setQuantity(obj.getQuantity());
					p1.setPrice(obj.getPrice());
					obj1.save(p1);
				}
			}
		}



		public void DeleteProduct(int x)
		{
				obj1.deleteById(x);
		}

		public List<Product> AllProduct() {
			return obj1.findAll();
		}


		public List<Customer_Details> AllCustomer() {
			return obj3.findAll();
		}

		public List<Sales> AllSales() {
			return obj4.findAll();
		}

		public void SelectProduct1(int p) 
		{
			Optional<Product> x = obj1.findById(p);
			System.out.println(x);
			Product y = null;
			if(x.isPresent())
			{
				 y = x.get();  
				
			}
			pid = y.getProduct_Id();
			Invoice i = new Invoice();
			i.setProduct_Id(y.getProduct_Id());
			i.setProduct_Name(y.getProduct_Name());
			i.setQuantity(qty);
			int price = (int)y.getPrice();
			i.setPrice((int)y.getPrice());
			tot = qty*price;
			i.setTotal_Bill(tot);
			if(tot > 10000)
			{
				discount = 0.2*tot;
				finalamt = tot-discount;
				i.setDiscount_Offered(discount);
				i.setFinal_Amount(finalamt);
			}
			if(tot > 5000 && tot<10000)
			{
				discount = 0.1*tot;
				finalamt = tot-discount;
				i.setDiscount_Offered(discount);
				i.setFinal_Amount(finalamt);
			}
			obj5.save(i);
			
		}

		public int QuantityStore(int p) 
		{
			qty = p;
			System.out.println(qty);
			return qty;
			
		}// TODO Auto-generated method stub

		public Invoice SelectInvoice() {
			System.out.println(pid);
			Optional<Invoice> x = obj5.findById(pid);
			Invoice y = null;
			if(x.isPresent())
			{
				 y = x.get();  
				
			}
			else
			{
				System.out.println("Item Not Found");	
			}
			System.out.println(y);
			 return y;
		   
		}
		
		

		/*public List<Customer_Details> AllCustomer(String n) {
			  try (Session session = HibernateUtil.getSessionFactory().openSession()) {

			        CriteriaBuilder builder = session.getCriteriaBuilder();

			        CriteriaQuery<Object[]> criteriaQuery = builder.createQuery(Object[].class);
			        Root<Item> root = criteriaQuery.from(Item.class);
			        criteriaQuery.multiselect(root.get("itemCategory"),builder.count(root.get("itemCategory")));
			        criteriaQuery.groupBy(root.get("itemCategory"));
			        Query<Object[]> query = session.createQuery(criteriaQuery);

			        List<Object[]> resultList = query.getResultList();
			        resultList.forEach(item-> System.out.println("Category : "+item[0]+"\t count : "+item[1]));

			    } catch (Exception e) {
			        e.printStackTrace();
			    }
		}*/
	}



/*


	/*public List<Mobile> getAll() {
		// TODO Auto-generated method stub
		return obj1.findAll();
	}
*/


