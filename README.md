# maven-version-badger
maven artifact version svg for personal.

Heroku free hosting on https://maven-version-badger.herokuapp.com

## How to Use

1. Get artifact url (ex. com.google.code.gson.gson)
```
https://repo1.maven.org/maven2/com/google/code/gson/gson/
```

2. Concatinate as `url` query
```
https://maven-version-badger.herokuapp.com/?url=https://repo1.maven.org/maven2/com/google/code/gson/gson/
```

3. Attach to Markdown
```
![](https://maven-version-badger.herokuapp.com/?url=https://repo1.maven.org/maven2/com/google/code/gson/gson/)
```

4. Check result

![](https://maven-version-badger.herokuapp.com/?url=https://repo1.maven.org/maven2/com/google/code/gson/gson/)


## Dependency
* express
* axios
* xml2js
* openBadge
