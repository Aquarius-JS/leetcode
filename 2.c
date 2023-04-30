/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){
    struct ListNode *ListNode3=(struct ListNode*)malloc(sizeof(struct ListNode));
    struct ListNode *p,*q,*r;
    for(p=l1,q=l2;q!=NULL;p=p->next,q=q->next){
        if(p->next==NULL&&q->next!=NULL){
            p->next=(struct ListNode*)malloc(sizeof(struct ListNode));
            p->next->next=NULL;
            p->next->val=0;
        }
        if(p->val+q->val>=10){
            if(p->next==NULL){
                p->next=(struct ListNode*)malloc(sizeof(struct ListNode));
                p->next->next=NULL;
                p->next->val=0;
            }
            p->next->val++;
        }
        p->val+=q->val;
        p->val%=10;
    }
    for(p=p;p!=NULL;p=p->next){
        if(p->val>=10){
            if(p->next==NULL){
                p->next=(struct ListNode*)malloc(sizeof(struct ListNode));
                p->next->next=NULL;
                p->next->val=0;
            }
            p->val%=10;
            p->next->val++;
        }
    }
    return l1;
}
