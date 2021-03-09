#include <iostream>
#include <cmath>

using namespace std;

int main() {
    string Name = "Itish Dhiman";
    char Grade = 'B';
    string Uni = "JUIT Waknaghat";
    double cgpa = 6.0;
    bool passOut = true;
    int rollNum = 151428;
    // Name[0] = 'N';
    // cout << "This is to certify that " << Name << "(" << rollNum << ") has now completed his B.E degree program from " << Uni << " with an overall grade " << Grade << " and a cgpa of " << cgpa << endl;
    // cout << Name.length() << endl;
    // cout << Name.substr(0, 3) << endl;
    // cout << sqrt(38) << endl;

    int age;
    cout << "Enter your age: ";
    cin >> age;

    if(0 < age <= 18) {
        cout << "minor" << endl;
    }
    else {
        cout << "adult" << endl;
    }
     
}


