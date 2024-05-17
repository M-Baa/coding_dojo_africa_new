public class TestCafe {
    public static void main (String[] args){
        CafeUtil cafeUtil = new CafeUtil();

        int streakGoal10 = cafeUtil.getStreakGoal();
        System.out.println("Streak goal for 10 weeks:" + streakGoal10);

        int numWeeks = 20;
        int streakGoalCustom = cafeUtil.getStreakGoal(numWeeks);
        System.out.println("streak goal for " + numWeeks + "weeks:" + streakGoalCustom);
    

    double[] prices = {5.5,4.5,6.5,4.0};
    double total = cafeUtil.getOrderTotal(prices);
    System.out.println("order total:" + total);

    ArrayList<String> menuItems = new ArrayList<>();
    menuItems.add("drip coffee");
    menuItems.add("cappuccino");
    menuItems.add("latte");
    menuItems.add("mocha");
    System.out.println("Menu:");
    cafeUtil.displayMenu(menuItems);

    ArrayList<String> customers = new ArrayList<>();
    customers.add("Maryem");
    customers.add("muftah");
    
    cafeUtil.addCustomer(customers);

    }



}