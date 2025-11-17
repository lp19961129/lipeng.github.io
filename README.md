# 李鹏博客网站

这是一个使用HTML、CSS和JavaScript开发的现代化个人博客网站，具有响应式设计和丰富的交互效果。

## 项目结构

```
grenbook/
├── index.html         # 主页面HTML结构
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── main.js        # JavaScript交互功能
└── images/            # 图片资源（SVG格式）
    ├── avatar.svg     # 博主头像
    ├── blog1.svg      # 博客文章1封面
    ├── blog2.svg      # 博客文章2封面
    └── blog3.svg      # 博客文章3封面
```

## 功能特性

- **响应式设计**：适配各种屏幕尺寸的设备
- **现代化UI**：简洁优雅的设计风格
- **平滑滚动**：页面内导航平滑滚动效果
- **交互动画**：文章卡片悬停效果、图片加载动画
- **导航栏滚动效果**：滚动时导航栏背景变化
- **返回顶部按钮**：方便长页面浏览
- **表单交互**：联系表单提交动画效果
- **SVG图片**：所有图片使用SVG格式，保证清晰度和加载速度

## 部署步骤

要将博客网站部署到外网，让全球用户可以访问，您可以按照以下步骤进行操作：

### 方法一：使用GitHub Pages（推荐初学者）

1. **注册GitHub账号**
   - 访问 https://github.com 注册账号

2. **创建新仓库**
   - 登录后，点击右上角的"+"按钮，选择"New repository"
   - 仓库名称可以设为：`username.github.io`（将username替换为您的GitHub用户名）
   - 设置为公开仓库（Public）
   - 点击"Create repository"

3. **安装Git（如果尚未安装）**
   - Windows：下载并安装 https://git-scm.com/download/win
   - Mac：使用Homebrew安装 `brew install git`
   - Linux：使用包管理器安装，如 `sudo apt-get install git`

4. **克隆仓库到本地**
   ```bash
   git clone https://github.com/username/username.github.io.git
   ```

5. **复制网站文件**
   - 将本项目中的所有文件复制到克隆的仓库文件夹中

6. **提交并推送更改**
   ```bash
   cd username.github.io
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

7. **访问您的网站**
   - 等待几分钟，然后访问 https://username.github.io

### 方法二：使用Vercel（专业开发者推荐）

1. **注册Vercel账号**
   - 访问 https://vercel.com 注册账号

2. **创建新项目**
   - 登录后，点击"New Project"
   - 选择"Import Git Repository"
   - 连接您的GitHub仓库或直接导入本地项目

3. **配置部署**
   - 无需特殊配置，Vercel会自动检测静态网站
   - 点击"Deploy"

4. **获取域名**
   - 部署完成后，Vercel会提供一个免费的域名，如 `your-project.vercel.app`

### 方法三：使用Netlify

1. **注册Netlify账号**
   - 访问 https://www.netlify.com 注册账号

2. **部署网站**
   - 登录后，点击"New site from Git"
   - 连接您的GitHub仓库
   - 配置构建选项（静态网站无需特殊配置）
   - 点击"Deploy site"

3. **自定义域名**（可选）
   - 在Netlify中，您可以添加自定义域名
   - 需要在域名注册商处设置DNS记录

### 方法四：使用传统的Web服务器

如果您有自己的服务器，可以按照以下步骤部署：

1. **准备服务器**
   - 确保服务器安装了Web服务器软件（如Apache、Nginx）

2. **上传文件**
   - 使用FTP或SSH将网站文件上传到服务器的网站根目录（通常是 `/var/www/html/` 或 `/usr/local/apache2/htdocs/`）

3. **配置域名**
   - 在域名注册商处设置A记录或CNAME记录，指向您的服务器IP地址

4. **测试网站**
   - 打开浏览器，访问您的域名

## 自定义网站内容

### 修改博客文章

1. 打开 `index.html` 文件
2. 在博客文章部分找到对应的 `<article>` 元素
3. 修改文章标题、日期、分类、摘要和内容
4. 如果需要添加新文章，可以复制现有的 `<article>` 元素并修改内容

### 修改个人信息

1. 打开 `index.html` 文件
2. 修改关于我部分的个人简介和联系方式
3. 修改页脚部分的版权信息

### 修改样式

1. 打开 `css/style.css` 文件
2. 修改CSS变量来自定义颜色方案：
   ```css
   :root {
       --primary-color: #4CAF50;  /* 主色调 */
       --primary-dark: #388E3C;   /* 深色主色调 */
       --text-color: #333;        /* 文本颜色 */
       /* 其他变量... */
   }
   ```

## 浏览器兼容性

本网站在以下浏览器中测试通过：

- Google Chrome（最新版）
- Mozilla Firefox（最新版）
- Microsoft Edge（最新版）
- Apple Safari（最新版）

## 许可证

本项目采用MIT许可证。您可以自由使用、修改和分发本项目。

## 致谢

感谢使用格林笔记博客模板！如果您有任何问题或建议，请随时提出。