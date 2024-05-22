import java.util.ArrayList;

public class Order{
    private String name;
    private boolean ready;
    private ArrayList<items> items;


    // CONSTRUCTOR
    public Order (){
        this.name="Guest";
        this.items=new ArrayList<Item>();
    }

// Overloadeed construc

public Order(String name){
    this.name=name;
    this.items=new ArrayList<Item>();
}

public void addItem(Item item){
    items.add(item);
}

public String getStatusMessage(){
    if(this.ready){
        return "your order is ready";

    }

    return "thank u for waiting your order will be ready soon ";
}

public double getOrderTotal(){
    double total = 0;
    for(Item item : items){
        total += item.getPrice();
    }
    return total;
}

public void display(){
    system.out.println("customer name:"+this.name);
    for (Item item : items){
        system.out.println(item.getName()+" -$"+item.getPrice());
    }
    system.out.println("total:"+getOrderTotal());
}

public String getName(){
    return this.name;

}

public void setName(String name){
    this.name=name;
}

public boolean getReady(){
    return this.ready;
}

public void setReady(boolean ready){
    this.ready=ready;
}
public ArrayList<Item> getItems(){
    return this.items;
}
public void setItems(ArrayList<Item> items){
    this.items = items;
}


}