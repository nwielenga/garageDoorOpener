#include <stdio.h>
#include <wiringPi.h>
int main()
{
  wiringPiSetup();

  pinMode(7,OUTPUT);
  pinMode(3,OUTPUT);
  pinMode(22,OUTPUT);
  pinMode(25,OUTPUT);
  printf("Relays online!\n");
  return 0;
  }
