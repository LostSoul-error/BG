package Normal;

import java.sql.SQLOutput;
import java.util.Scanner;

public class Student {
    private String name;
    private long roll;
    private static String[] subjects = new String[5];
    private int marks[] = new int[5];

    static Scanner sc = new Scanner(System.in);
    static Student students[] = new Student[10];

    Student(String x , long y , int m1 , int m2 , int m3 , int m4 , int m5){
        name = x;
        roll = y;
        marks[0] = m1;
        marks[1] = m2;
        marks[2] = m3;
        marks[3] = m4;
        marks[4] = m5;
    }

    public static int Search(Student students[], long target) {
        for (int i = 0; i < students.length; i++) {
            if (students[i].roll == target) {
               return i;
            }
        }
        return -1;
    }

    public static double calcP(Student students[] , int target) {
        double  p = 0;
        for (int j = 0 ; j< 5 ; j++){
            p+=students[target].marks[j];
        }

        return p/5.0;
    }

    public static void setSubjects(){
        sc.nextLine();
        System.out.print("Enter Subject 1 Name :");
        subjects[0] = sc.nextLine();
        System.out.print("Enter Subject 2 Name :");
        subjects[1] = sc.nextLine();
        System.out.print("Enter Subject 3 Name :");
        subjects[2] = sc.nextLine();
        System.out.print("Enter Subject 4 Name :");
        subjects[3] = sc.nextLine();
        System.out.print("Enter Subject 5 Name :");
        subjects[4] = sc.nextLine();
    }
    public static void main(String[] args) throws InterruptedException {

        for(int i = 0 ; ; i++){
            System.out.println("MAIN MENU\n");
            System.out.println("1. Enter Student Details    -   Under Maintainance");
            System.out.println("2. Set Subjects [necessary]");
            System.out.println("3. Marks Entry of pre-loaded Student - Under Maintenance");
            System.out.println("4. Student Entry with Marks Entry");
            System.out.println("5. Show individual result");
            System.out.println("6. Show overall result");
            System.out.println("Press any other key to EXIT");
            System.out.print("Enter Your Choice :");
            int choice = sc.nextInt();
            System.out.println("\n");

            boolean subjectsSet = false;
            switch(choice){
                case 1:
                    System.out.println("Under Maintenance");
                    Thread.sleep(30);
                    System.exit(0);
                case 2:
                    subjectsSet = true;
                    setSubjects();
                    break;
                case 3:
                    System.out.println("Under Maintenance");
                    Thread.sleep(30);
                    System.exit(0);
                case 4:
                    System.out.println("\n\n");
                    System.out.print("Enter Student Name :");
                    sc.nextLine();
                    String n = sc.nextLine();
                    System.out.print("Enter Student Roll No. :");
                    long rn = sc.nextLong();
                    if(!subjectsSet){
                        subjectsSet = true;
                        setSubjects();
                    }
                    System.out.print("Enter Marks in " + subjects[0] + " : ");
                    int m1 = sc.nextInt();
                    System.out.print("Enter Marks in " + subjects[1] + " : ");
                    int m2 = sc.nextInt();
                    System.out.print("Enter Marks in " + subjects[2] + " : ");
                    int m3 = sc.nextInt();
                    System.out.print("Enter Marks in " + subjects[3] + " : ");
                    int m4 = sc.nextInt();
                    System.out.print("Enter Marks in " + subjects[4] + " : ");
                    int m5 = sc.nextInt();

                    students[i] = new Student(n,rn,m1,m2,m3,m4,m5);
                    break;
                case 5:
                    sc.nextLine();
                    System.out.print("Enter Roll No : ");
                    long rnsearch = sc.nextLong();
                    int target = Search(students, rnsearch);
                    System.out.println("Name : "+ students[target].name);
                    System.out.println("Roll No : "+ students[target].roll);

                    System.out.println("Percentage : "+ calcP(students,target) + " %");
                    break;

                case 6:
                    sc.nextLine();
                    System.out.println("Showing Overall Result :");
                    Thread.sleep(50);
                    int top = 0;
                    for (int j = 0; i < students.length; i++) {
                       if(calcP(students, j) > calcP(students,top)){
                           top = j;
                        }
                    }
                    System.out.println(students[top].name + "(Roll No : "+ students[top].roll +" ) secured "+ calcP(students,top) +"% marks which is the highest obtained among all the students.");
                    break;
                default:
                    System.exit(0);
            }
        }


    }
}
