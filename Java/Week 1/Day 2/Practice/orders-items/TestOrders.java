import java.util.ArrayList;

public class TestOrders {
    public static void main (String[] args){
        Item item1 = new Item("mocha", 3.99);
        Item item2 = new Item ("latte",5.50);
        Item item3 = new Item("drip coffee", 3.99);
        Item item4 = new Item("cappuccino.", 4.99);


        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order ("Noah");
        Order order4 = new Order ("Sam");



    System.out.println(order1);



    order2.items.add(item1);
    order2.total += item1.price;


    order3.items.add(item4);
    order3.total += item4.price;

    order4.items.add(item2);
    order4.total += item2.price;

    order1.ready =true;

    order4.items.add(items2);
    order4..items.add(item2);
    order4.total += items.price *2;


    order2.ready =true;

        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);

        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: %s\n", order3.total);
        System.out.printf("Ready: %s\n", order3.ready);

        System.out.printf("Name: %s\n", order4.name);
        System.out.printf("Total: %s\n", order4.total);
        System.out.printf("Ready: %s\n", order4.ready);





    }



}