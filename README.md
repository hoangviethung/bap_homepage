[![Build Status](http://runbot.odoo.com/runbot/badge/flat/1/master.svg)](https://github.com/hoangviethung)
[![Tech Doc](http://img.shields.io/badge/master-docs-875A7B.svg?style=flat&colorA=8F8F8F)](https://github.com/hoangviethung)
[![Help](http://img.shields.io/badge/master-help-875A7B.svg?style=flat&colorA=8F8F8F)](https://github.com/hoangviethung)
[![Nightly Builds](http://img.shields.io/badge/master-nightly-875A7B.svg?style=flat&colorA=8F8F8F)](https://github.com/hoangviethung)

Source PUG - SASS Basic
----

Chắc hẳn các bạn đã nghe qua SASS SCSS hay LESS giúp cho việc code CSS được nhanh hơn, sử dụng được nhiều chức năng hay như dùng biến, mixins, functions(hàm)…. Có thể tái sử dụng code một cách hợp lý giúp cho việc code trở nên linh hoạt, nhanh lẹ tiết kiệm thời gian…

Thì bên HTML cũng thế nó cũng có những engine như CSS giúp cho việc code trở nên nhanh chóng, tiện lợi tiết kiệm nhiều thời gian cho lập trình viên và 1 trong số đó chính là PUG. Hôm nay mình sẽ giới thiệu sơ sơ cơ bản về PUG cho các bạn biết nó là gì cũng như cách sử dụng chúng cơ bản trước nhé

PUG là một template engine cực kỳ mạnh giúp thay đổi hoàn toàn cách viết HTML với những cú pháp hoàn toàn mới, nhiều tính năng tiện ích và tất nhiên sẽ giải quyết những vấn đề mà HTML không thể làm được.

Nếu các bạn nào đã từng làm qua SASS SCSS hay LESS bên CSS thì nó cũng tương tự đó nhưng cái PUG này là dành cho HTML nà.

Về các thuộc tính của PUG thì ở trang chủ của PUG đã trình bày rất chi tiết và kỹ càng nên mình sẽ không trình bày lại nữa. Các bạn có thể tham khảo ở đây. Ở bài viết này mình chủ yếu sẽ hướng dẫn các bạn cách sử dụng PUG đơn giản trước.

Sau khi các bạn đọc ở trang chủ của nó về những thuộc tính, điều kiện if else, vòng lặp,… thì trong số đó có một tính năng rất hay mà mình luôn dùng khi code với PUG đó là Mixins.

Bình thường khi các bạn cắt 1 template PSD chắc chắn sẽ gặp nhiều trường hợp dùng đi dùng lại cấu trúc tiêu đề giống nhau hoặc là hình ảnh, đường dẫn(link) hay là một block nhỏ nào đó thì việc dùng Mixins nó cho phép ta tạo một block trong PUG và sử dụng lại nhiều lần.

Ví dụ bạn code 3 item nào đó có cấu trúc giống nhau và trong HTML bạn code nó như thế này sau đó copy ra 3 lần và thay đổi nội dung tương ứng cho các item còn lại đúng không nào.

Đây chỉ mới là bước cơ bản mình hướng dẫn cho các bạn biết thôi, sau này mình sẽ hướng dẫn các bạn xây dựng hoàn chỉnh một frontend template workflow giống của mình ở trên. Sử dụng GULP để buid lên. Giúp các bạn tự tạo ra riêng cho bản thân một template để hỗ trợ cắt PSD được nhanh chóng.

Để cho mau hiểu hơn về PUG các bạn nên tham khảo code ở một số trang nước ngoài và trang chủ của PUG cũng như trên Youtube với từ khóa “pug html mixins, pug html if else, pug html tutorials….”. Cám ơn các bạn đã đọc bài viết và chúc các bạn một ngày tốt lành nhé..

Getting started with Source PUG - SASS Basic
-------------------------
For a standard installation please follow the <a href="https://github.com/hoangviethung">Setup Template</a>
from the documentation.