import {FOO, IFoo, IBar} from "./bar";

declare function foo(i: number): IFoo;
declare function bar(): IBar;
foo(FOO);
bar();
