class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const Solution = {
  firstTry: function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    if (head.next === null) return head;

    let prev = head;
    let curr = head.next;

    prev.next = null;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  },
};
