"""
https://leetcode.com/problems/zigzag-conversion/description/ 
"""
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        # handle edge cases
        if numRows == 1 or numRows >= len(s):
            return s
        
        # create list to store each row's characters
        # example for "PAYPALISHIRING" with numRows=3:
        # rows[0] will collect "P   A   H   N"
        # rows[1] will collect "A P L S I I G"
        # rows[2] will collect "Y   I   R    "
        rows = ["" for _ in range(numRows)]
        
        # track current position and direction
        current_row = 0        # which row we're currently adding to
        is_moving_down = True  # whether we're moving down or up in the zigzag
        
        # iterate through each character in input string
        for char in s:
            # add current character to its row
            rows[current_row] += char
            
            # determine next row position and direction
            if is_moving_down:
                # if we hit bottom row, start moving up
                if current_row == numRows - 1:
                    current_row -= 1
                    is_moving_down = False
                else:
                    # continue moving down
                    current_row += 1
            else:
                # if we hit top row, start moving down
                if current_row == 0:
                    current_row += 1
                    is_moving_down = True
                else:
                    # continue moving up
                    current_row -= 1
        
        # combine all rows into single string
        # automatically handles spacing since we only stored
        # the actual characters in each row
        return "".join(rows)
        