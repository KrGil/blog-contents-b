# Utterances 에서 





![image-20230311112713143](/Users/eisen/Documents/Github/blog-contents-b/software/version-control/github/Untitled.assets/image-20230311112713143.png)



![image-20230311121707970](/Users/eisen/Documents/Github/blog-contents-b/software/version-control/github/Untitled.assets/image-20230311121707970.png)



```shell
curl -H "Content-type: application/json" \
--data-raw '{
  "channel": "blog-comments",
  "blocks": [
      {
          "type": "section",
          "text": {
              "type": "mrkdwn",
              "text": "Hi I am a bot that can post *_fancy_* messages to any public channel."
          }
      }
  ]
}' \
-H "Authorization: Bearer xoxb-4958020094112-4919815162247-y6IDhlAzPyA5mQmJMDhawZ5D" \
-X POST https://slack.com/api/chat.postMessage
```



![image-20230311122853810](/Users/eisen/Documents/Github/blog-contents-b/software/version-control/github/Untitled.assets/image-20230311122853810.png)





### References

https://jojoldu.tistory.com/705

https://api.slack.com/tutorials/tracks/posting-messages-with-curl

https://github.com/ShanePark/markdownBlog/blob/master/.github/workflows/discussions-slack.yml