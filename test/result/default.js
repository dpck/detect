// returns the correct output
import test from 'test'
import test2, * as test3 from 'test2'
import 'test3'
export { default as Test } from 'test4'

/* expected */
["test", "test2", "test3", "test4"]
/**/