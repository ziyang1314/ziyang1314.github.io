# 创建本地的git仓库；

mkdir 文件夹

cd  文件夹

git init

添加你要上添加到本地仓库的代码文件；

git add .  添加全部

或者

git add  filename 添加指定的文件


git commit -m '描述这次提交的内容' 形式将代码提交到本地的代码库；

# 版本回退：

git log 可以查看commit的提交记录

git log --pretty=online 可以精简log输出内容

SHA1计算 出来的长的数字字母串就是每次提交形成的版本号也叫 commit—id

git reset --hard HEAD^ 可以将commit后的代码回退到上一个版本

^^ 可以回退到上上一个版本 但是这样的都不好

git reset --head  commit—id  这样可以回退到指定的版本

git reflog 可以查看log输出，这样就可以避免代码回退之后找不到之前最新的commit—id了

工作区->暂存区->当前的分支；

git add    工作区-->暂存区

git commit 暂存区-->当前分支

git add 之后git commit 也完成之后，工作区和暂存区应该都是干净的；

可以通过 git status 进行查看当前的提交状况

注意：git 管理的是修改，而不是文件，第一次修改提交，add ，第二次修改，add ,commit，那么版本库的是第二次的提交

可以通过 git diff  HEAD -- filename 来查看工作区和代码库最新代码的区别；


# 工作区修改撤销；

通过命令 git checkout -- filename 来完成

分两种情况：

1.暂存区无修改；

  撤销的只是工作区的修改，到和版本库一致；

2.暂存区有修改，工作区无改动，或者有改动

  撤销的都是工作区的修改，代码和暂存区保持一致；

# 文件删除操作

1.直接删除

2.命令行的方式 rm filename

无论哪种方式，git status  都可以查看到文件的状态

确定要进行删除的话，就用git rm filename 然后 commit 完成删除仓库中的文件操作

# 关联远程库；

github创建仓库

之后push an existing repository from the command line

git remote add origin https://github.com/ziyang1314/learngit.git

然后将本地的内容推送上去；

git push -u origin master

以上是关联本地仓库创建新仓库；

也可以远程克隆；

git clone 仓库地址就可以了

# 分支管理：

创建分支和合并分支；

创建分支： git checkout -b 分支名称 这里是创建并切换分支

相当于

git branch dev  然后 git checkout dev

单独的git branch 可以查看分支列表 以及*标注的当前分支

内容修改之后切换到master

然后git merge 要合并的分支

这种方式的合并是fast forward 模式；通常不会这样；

删除分支

git branch -d 分支名称分支名

强行删除分支

git branch -D 分支名称分支名

最新的创建和切换分支的方式：

git switch -c <name>  我的git好像不太支持

你可以升级git 因为switch 是从2.23之后才新加入的命令；

mac升级：https://www.jianshu.com/p/6eca0eadcc22

# 解决冲突

git merge <name>

git status 查看冲突的有那些文件

我使用的是vscode，可以看到文件上有c的是有冲突的文件；之后解决冲突，然后add commit 然后push

注意：分支合并的时候，直接 git merge 的形式是fast forward模式，合并之后在分支上看不出来曾经发生过合并；

git merge --no-ff -m "merge with no-ff" dev 加上--no-ff 可以在分支合并之后看到合并的记录（通过git log）；
                   ^-----------=|
若合并之后要创建一个新的commit 需要-m 

修复bug的时候；

单独拉出一个分支进行修复；

git stash 可以暂存当前的工作区修改；

然后切换到拉出来的要修复bug的分支，修复完成之后，再回到我们的开发分支；

之后通过git stash list 查看我们保存的工作区暂存修改；

1.通过git stash apply 恢复我们暂存内容，但是stash并不会被删除，可以通过git stash drop 来删除；

2.通过git stash pop 也可以达到上述1的结果；

对于多次stash 的想恢复到指定的stash

可以 git stash apply stash@{0}   {这里是指定的stash的版本号，可以通过git stash list查看}；

git remote  查看远程库的分支

git remote -v 可以查看远程库拉取和推送的地址  如果没有推送（push）权限则只显示一条；

# 推送分支到远程仓库：

git push origin 分支名称 

多人协作的时候，拉取的代码

编辑远程仓库的dev分支，测试本地是master分支，gitpull的时候连远端的仓库中的dev分支的修改不会拉取到

在对远端进行推送的时候需要本地仓库的分支和远端做好关联

具体方式是：git branch --set-upstream-to=origin/dev dev 这里本地当前的分支是在dev上，远程库和本地的分支名称应该一样才好；

git rebase 变基

git log --graph --pretty=oneline --abbrev-commit  可以查看分支内容的提交情况；

gitee :

cat ~/.ssh/id_rsa.pub 查看自己的公钥；配置ssh

# 创建gitee仓库；

如果已经关联了github的远程库；

可以通过 git remote rm origin 删除远程库

然后重新在关联命名为github 

无论github gitee 其关联的方式都是类似的

git remote add rename git@gitee（github）.com:yourCangKuName/learngit.git

关联成功之后，首次需要push新关联的仓库

git push gitee 分支名称

之后进行本地分支和新的仓库的分支的关联；

和上面的类似： git branch --set-upstream-to=gitee/dev dev

之后修改内容就可以正常的提交了,在库关联成功之后;
每次提交需要指定提交的仓库；

# 忽略部分文件；
在项目开发过程中不希望nodemodules这些文件上传上去可以自己编写.gitignore

#myconfig;
文件夹名称
* .js 
db.class 

给git命令配置别名-- git global alias.rename branch

我还是老实的先用这个吧，熟悉了之后，可以在主目录 .gitconfig中进行内容的配置；

gui工具 sourcetree

通过自己的域名来访问自己的github项目

github创建仓库，仓库名称是 github账号名称.github.io

仓库中添加文件CNAME 文件中添加自己购买的域名，这样做的目的是为了关联自己github账号

自己的域名；

准备好上面的内容之后，就可以进行域名解析了，解析的目的是将我们的域名和github项目的地址进行关联，
使每次访问我们域名的时候能够解析到我们项目的资质去；

具体的过程：

https://zhuanlan.zhihu.com/p/102592286?utm_source=wechat_session&utm_medium=social&utm_oi=1199726953626193920