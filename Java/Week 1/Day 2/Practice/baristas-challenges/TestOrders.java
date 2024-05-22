public class TestOrders {
    public static void main(String[]args){
        Item item1 = new Item ("mocha",3.50);
        Item item2 = new Item ("drip coffee",2.50);
        Item item3 = new Item ("capuccino",4.50);
        Item item4 = new Item ("expresso",5.50);


        Order order1 = new Order();
        Order order2 = new Order();

            Order order3 = new Order("mary");
            Order order4 = new Order("muftah");
            Order order5 = new Order("yassin");



order1.addItem(item2);
order1.addItem(item3);

order2.addItem(item2);
order2.addItem(item2);

order3.addItem(item4);
order3.addItem(item4);

order4.addItem(item1);
order4.addItem(item2);

order5.addItem(item1);
order5.addItem(item3);
order5.addItem(item3);



System.out.println(order2.getStatusMessage());
    order2.setReady(true);
        System.out.println(order2.getStatusMessage());

    System.out.println(order2.getOrderTotal());
    order2.display();




    }
}