## Modules
<dl>
<dt><a href="#module_object">object</a></dt>
<dd><p>simple object export</p>
</dd>
</dl>
## Classes
<dl>
<dt><del><a href="#All">All</a> ⇐ <code>Number</code></del></dt>
<dd><p>a class with all of the things</p>
</dd>
</dl>
## Functions
<dl>
<dt><a href="#setMagicNumber">setMagicNumber(x)</a></dt>
<dd><p>Set the magic number.</p>
</dd>
</dl>
## Typedefs
<dl>
<dt><a href="#NumberLike">NumberLike</a> : <code>number</code> | <code>string</code></dt>
<dd><p>A number, or a string containing a number.</p>
</dd>
</dl>
<a name="module_object"></a>
## object
simple object export


* [object](#module_object)
  * [.one](#module_object.one)
  * [.three(four, five)](#module_object.three) ⇒ <code>object</code> &#124; <code>string</code>

<a name="module_object.one"></a>
### object.one
first property

**Kind**: static property of <code>[object](#module_object)</code>  
<a name="module_object.three"></a>
### object.three(four, five) ⇒ <code>object</code> &#124; <code>string</code>
a function

**Kind**: static method of <code>[object](#module_object)</code>  
**Returns**: <code>object</code> &#124; <code>string</code> - this return has several types  
**Since**: v0.10.28  
**Author:** Lloyd <75pound@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| four | <code>string</code> | The input string |
| five | <code>object</code> | a second input |

**Example**  
```js
allTogether(true);
```
<a name="All"></a>
## ~~All ⇐ <code>Number</code>~~
***Deprecated***

a class with all of the things

**Kind**: global class  
**Extends:** <code>Number</code>  
**Since**: v0.10.28  
**Author:** 75lb <75pound@gmail.com>  

* ~~[All](#All) ⇐ <code>Number</code>~~
  * [new All(input, [options])](#new_All_new)
  * [.topping](#All#topping) : <code>string</code>
  * [.size](#All#size)
  * ~~[.allThings(one, two)](#All#allThings) ⇒ <code>object</code> &#124; <code>string</code>~~

<a name="new_All_new"></a>
### new All(input, [options])
the constructor description


| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> | an input |
| [options] | <code>object</code> | optional shit |

**Example**  
```js
var yeah = new Everything(true);
```
<a name="All#topping"></a>
### all.topping : <code>string</code>
the ingredients on top

**Kind**: instance property of <code>[All](#All)</code>  
**Default**: <code>&quot;mud, lettuce&quot;</code>  
**Since**: v1.0.0  
<a name="All#size"></a>
### all.size
the general size

**Kind**: instance property of <code>[All](#All)</code>  
<a name="All#allThings"></a>
### ~~all.allThings(one, two) ⇒ <code>object</code> &#124; <code>string</code>~~
***Deprecated***

This function has all tags set

**Kind**: instance method of <code>[All](#All)</code>  
**Returns**: <code>object</code> &#124; <code>string</code> - this return has several types  
**Since**: v0.10.28  
**Author:** Lloyd <75pound@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>string</code> | The input string |
| two | <code>object</code> | a second input |

**Example**  
```js
all.allTogether(true);
```
<a name="setMagicNumber"></a>
## setMagicNumber(x)
Set the magic number.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>[NumberLike](#NumberLike)</code> | The magic number. |

<a name="NumberLike"></a>
## NumberLike : <code>number</code> &#124; <code>string</code>
A number, or a string containing a number.

**Kind**: global typedef  
