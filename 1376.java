import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public List<Integer> powerfulIntegers(int x, int y, int bound) {
        int ans1 = 1;
        int ans2 = 1;
        Set<Integer> ans = new HashSet<>();
        if (x == 1 && y == 1 && bound>=2) {
            ans.add(2);
        } else if (x == 1 && y > 1) {
            while (true) {
                if (ans1 + ans2 <= bound) {
                    ans.add(ans1 + ans2);
                    ans2 *= y;
                } else if (ans1 + ans2 > bound) {
                    break;
                }
            }
        } else if (x > 1 && y == 1) {
            while (true) {
                if (ans1 + ans2 <= bound) {
                    ans.add(ans1 + ans2);
                    ans1 *= x;
                } else if (ans1 + ans2 > bound) {
                    break;
                }
            }
        } else if (x > 1 && y > 1) {
            while (true) {
                while (true) {
                    if (ans1 + ans2 <= bound) {
                        ans.add(ans1 + ans2);
                        ans2 *= y;
                    } else if (ans1 + ans2 > bound) {
                        ans2 = 1;
                        break;
                    }
                }
                ans1 *= x;
                if(ans1+ans2>bound) break;
            }
        }
        return new ArrayList<>(ans);
    }
}