---
title: 2d Optional Lab -Caesar Cipher (chars)
---


## Cryptogrpahy Video Eplainations

### The Caesar Cipher
<iframe width="100%" height="489" src="https://www.youtube.com/embed/sMOZf4GN3oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Programming a Caesar Cipher

shift = 3
```
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
```

### 'Complete' Cypher Program
```java
class Main {
 public static void main(String[] args) {
  String message = "Hello World";
  int offset=3;
  
  StringBuilder result = new StringBuilder();
  for (char character : message.toCharArray()) {
      if (character != ' ') {
          int originalAlphabetPosition = character - 'a';
          int newAlphabetPosition = (originalAlphabetPosition + offset) % 26;
          char newCharacter = (char) ('a' + newAlphabetPosition);
          result.append(newCharacter);
      } else {
          result.append(character);
      }
  }
  System.out.println(result);

 }
}
```

<details>
<summary>
🧪 Try the code out~!
</summary>

**Don't worrry about understanding the code yet!** Since it goes over topics we didn't teach yet.

**Exercise**
- Try Changing the message.
- Try changing the offset

<iframe src="https://trinket.io/embed/java/da0f8ce279" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>


### Breaking down the program

```java
class Main {
 public static void main(String[] args) {
  char character = 'a';
  int offset=4;
  
  int originalAlphabetPosition = character - 'a';
  int newAlphabetPosition = (originalAlphabetPosition + offset);
  char newCharacter = (char) ('a' + newAlphabetPosition);
  System.out.println(newCharacter);

 }
}

```


<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/java/a8015ba635" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>

:::caution But there is a bug!
- What happens if we write as letter z?
:::

### Fixing Our Minimalist Cipher
Here we have a simplified version of the program that only encodes one character.

```java
class Main {
 public static void main(String[] args) {
  char character = 'h';
  int offset=4;
  
  int originalAlphabetPosition = character - 'a';
  int newAlphabetPosition = (originalAlphabetPosition + offset) % 26;
  char newCharacter = (char) ('a' + newAlphabetPosition);
  System.out.println(newCharacter);

 }
}

```

<details>
<summary>
🧪 Try the code out~!
</summary>
<iframe src="https://trinket.io/embed/java/78261b3a21" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

</details>



## More about cryptography

:::tip On the future
I don't think we will be going over those this semester, but hopefully I will be populating the "blog" section with more cryptography related problems and solutions as it is pretty relevant for Computer Science. 
:::
### Cryptogrpahy: Crash Course Computer Science 

<iframe width="100%" height="413" src="https://www.youtube.com/embed/jhXCTbFnK8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>






