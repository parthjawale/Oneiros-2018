#include<stdio.h>
#include<conio.h>
#include<string.h>

struct node
{
    /* data */
    char data_1;
    char data_2;
    int data_3;
    int data_4;
    struct node *next;
};

struct string{
    char char_1;
    struct string *next1; 
}
 
struct node *top=NULL;
struct string *head=NULL,*tail=NULL;

char str[40][100],line[40][100],h;
int len,l,i,m1,m2,n1,n2,l1,l2;

void push(char a,char b,int i,int l)
{
    struct node *p;
    p = (struct node*)malloc(sizeof(struct node));
    p->data_1=a;
    p->data_2=b;
    p->data_3=i;
    p->data_4=l;
    p->next=top;
    top=p;  
    printf("\ndata entered %c,%c,%d\n",p->data_1,p->data_2,p->data_3);

}
void insert(char a)
{
    
}