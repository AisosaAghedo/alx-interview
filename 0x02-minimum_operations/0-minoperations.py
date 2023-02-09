#!/usr/bin/python3
"""
alx interview algorithm question on minimum operation
"""


def minOperations(n):
    """
    write a method that calculates the fewest number of operations
    needed to result in exactly n H characters in the file
    """

    operations = 0
    factors = 2

    while n > 1:
        while n % factors == 0:
            operations += factors
            n /= factors
        factors += 1
    return operations
