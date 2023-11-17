/**
735. Asteroid Collision

We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 

Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0

 * @param {number[]} asteroids
 * @return {number[]}
 */

var asteroidCollision = function(asteroids) {
    
    const s = [];
    for (let i = 0; i < asteroids.length; i++) {
        const a = asteroids[i];
        
        // Negative asteroids to the left of the stack can be ignored. 
        // They'll never collide. Let's just add it to the answer stack and
        // move on. I consider this a special case.
        if ((s.length === 0 || s[s.length -1] < 0) && a < 0 ) {
            s.push(a);
            
        // If an asteroid a is positive (l to r), it may still collide with an
        // a negative asteroid further on in the asteroids array
        } else if (a > 0) {
            s.push(a);
            
        // a is negative. It can only collide with positive ones in 
		// the stack. The following will keep on iterating
        // until it is dealt with.
        } else {
            const pop = s.pop();
            
            // positive pop beats negative a, so pick up pop
            // and re-add it to the stack.
            if (Math.abs(pop) > Math.abs(a)) {
                s.push(pop);
            
            // a has larger size than pop, so pop will get dropped
            // and we'll retry another iteration with the same 
            // negative a asteroid and whatever the stack's state is.
            } else if (Math.abs(pop) < Math.abs(a)) {
                i--;
            // magnitude of positive pop and negative a are the same
            // so we can drop both of them.
            } else { 
                continue;
            }
        }
    }
    
	// The stack should be the answer
    return s;
    
};
