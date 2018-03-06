$(document).ready(function() {
    testHashTable();
});


function testHashTable() {
    var newHashTable = new hashTable(10);

    newHashTable.insert(1132, 'sdf56666');
    newHashTable.insert(2212, 'chicken');
    newHashTable.insert(3123, 'foo');
    newHashTable.insert(4123, 'afassdf');
    newHashTable.insert(5122, 'dog');
    newHashTable.insert(6123, 'asdf');
    newHashTable.insert(7132, 'cat');
    newHashTable.insert(8123, 'asdfer34');
    newHashTable.insert(1123, '435734');
    newHashTable.insert(9123, 'jennifer');

    console.log(newHashTable);
    console.log('getting bad value: ' + newHashTable.get(912323));
    console.log('getting good value: ' + newHashTable.get(9123));
}


// hash table
class hashTable {
    constructor(n) {
        // object constructor - create the hashtable
        this.buckets = new Array(n);
        this.size = n;
    }

    hash(key) {
        // copying a hashing function from elsewhere
        // key is turned into a string, iterate through string, use charCodeAt to generate a number and sum them up
        // modulo the sum by size of the hashtable (will return 0 - size, tne number of buckets)

        var total = 0, bucket;

        for (var i = 0; i < String(key).length; i++) {
            total += String(key).charCodeAt(i);
        }

        bucket = total % this.size;
        return bucket;
    }

    insert(key, value) {
        // get index by hashing the key
        var index = this.hash(key);

        if (!this.buckets[index]) {
            // empty bucket, add the value
            this.buckets[index] = {key, value};
        } else if (this.buckets[index].key === key) {
            // had a hash collision but has the same key
            // update the value with new value
            this.buckets[index].value = value;
        } else {
            // had a hash collision, but different key
            // linear poke to find an empty bucket

            while (this.buckets[index]){
                if (this.buckets[index].key === key) {
                    //hash collision with same key, update value
                    this.buckets[index].value = value;
                    return;
                }
                if (index == this.size-1) {
                    index = 0;
                } else {
                    index++;
                }
            }
            this.buckets[index] = {key, value};
        }
    }

    get(key) {
        var index = this.hash(key);
        var countBuckets = 0;

        // empty bucket
        if (!this.buckets[index])
            return null;

        while (this.buckets[index].key != key) {
            if (countBuckets == this.size) {
                //looped through all buckets
                return null;
            } else if (index == this.size-1) {
                // start at index (hashed) node but probe if not a match
                index = 0;
            } else {
                index++;
            }
            countBuckets++; //count buckets to stop endless loop
        }
        return this.buckets[index].value;
    }
}
