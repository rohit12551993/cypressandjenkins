import ClassA from '../Pages/classA.js';
import ClassB from '../Pages/classB.js';

describe('Share variable between classes', () => {
  it('should share username', () => {
    const a = new ClassA();
    
    
  const username = a.getUsername(); // ✅ Get value from A
  
    const b = new ClassB();
   
    b.useUsername(username); // ✅ Use it in B
  

   
   
  });
});
