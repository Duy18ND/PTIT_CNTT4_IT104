class Comment_ {
    constructor(id_, userId_, content_) {
        this.id_ = id_;
        this.userId_ = userId_;
        this.content_ = content_;
        this.replies_ = [];
    }
    addReply_(reply) {
        this.replies_.push(reply);
    }
}
class Post_ {
    constructor(id_, userId_, content_) {
        this.id_ = id_;
        this.userId_ = userId_;
        this.content_ = content_;
        this.likes_ = [];
        this.comments_ = [];
    }
    addLike_(userId_) {
        if (this.likes_.findIndex(id => id === userId_) === -1) {
            this.likes_.push(userId_);
        }
    }
    addComment_(comment) {
        this.comments_.push(comment);
    }
}
class User_ {
    constructor(id_) {
        this.id_ = id_;
        this.posts_ = [];
        this.followers_ = [];
    }
    createPost_(content_) {
        User_.postCounter_++;
        const post = new Post_(User_.postCounter_.toString(), this.id_, content_);
        this.posts_.push(post);
        console.log(`User ${this.id_} da tao bai dang #${post.id_}`);
    }
    comment_(postId_, commentContent_) {
        const allPosts = [...this.posts_];
        this.followers_.forEach(user => allPosts.push(...user.posts_));
        const post = allPosts.find(p => p.id_ === postId_);
        if (!post) {
            console.log(`Khong tim thay bai dang co id: ${postId_}`);
            return;
        }
        User_.commentCounter_++;
        const comment = new Comment_(User_.commentCounter_.toString(), this.id_, commentContent_);
        post.addComment_(comment);
        console.log(`User ${this.id_} da binh luan vao bai dang #${postId_}`);
    }
    follow_(user) {
        if (this.followers_.findIndex(u => u.id_ === user.id_) !== -1) {
            console.log(`User ${this.id_} da theo doi user ${user.id_} roi`);
            return;
        }
        this.followers_.push(user);
        console.log(`User ${this.id_} da theo doi user ${user.id_}`);
    }
    likePost_(postId_) {
        const allPosts = [...this.posts_];
        this.followers_.forEach(user => allPosts.push(...user.posts_));
        const post = allPosts.find(p => p.id_ === postId_);
        if (!post) {
            console.log(`Khong tim thay bai dang co id: ${postId_}`);
            return;
        }
        if (post.likes_.findIndex(id => id === this.id_) !== -1) {
            console.log(`User ${this.id_} da thich bai dang nay roi`);
            return;
        }
        post.addLike_(this.id_);
        console.log(`User ${this.id_} da thich bai dang #${postId_}`);
    }
    viewFeed_() {
        let feedPosts = [];
        this.followers_.forEach(user => {
            feedPosts.push(...user.posts_);
        });
        if (feedPosts.length === 0) {
            console.log("Feed dang trong");
            return;
        }
        feedPosts.sort((a, b) => Number(b.id_) - Number(a.id_)); // moi nhat len dau
        console.log(`Feed cua user ${this.id_}:`);
        feedPosts.forEach(post => {
            console.log(`- Post #${post.id_} cua user ${post.userId_}: ${post.content_}`);
            console.log(`  Likes: ${post.likes_.length}`);
            if (post.comments_.length > 0) {
                console.log(`  Binh luan:`);
                post.comments_.forEach(cmt => {
                    console.log(`    - ${cmt.userId_}: ${cmt.content_}`);
                    if (cmt.replies_.length > 0) {
                        cmt.replies_.forEach(reply => {
                            console.log(`       + Reply tu ${reply.userId_}: ${reply.content_}`);
                        });
                    }
                });
            }
        });
    }
}
User_.postCounter_ = 0;
User_.commentCounter_ = 0;
// Giả sử code class Comment_, Post_, User_ đã có sẵn
const userA = new User_("A");
const userB = new User_("B");
const userC = new User_("C");
userA.follow_(userB);
userA.follow_(userC);
userB.createPost_("Chao moi nguoi, day la bai dang dau tien cua toi!");
userC.createPost_("Bai dang thu nhat cua toi.");
userC.createPost_("Bai dang thu hai cua toi.");
userA.createPost_("Xin chao, toi la user A!");
userA.comment_("1", "Bai dang rat hay!");
userC.comment_("1", "Chao ban!");
userA.likePost_("2");
userB.likePost_("3");
userA.viewFeed_();
userB.viewFeed_();
userC.viewFeed_();
