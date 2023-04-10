import * as React from "react";

const Top: React.FC = () => {
  return (
    <div>
      <h1>Top Page Hello PWA!</h1>
      <p>
        Single Page Applicationを更新する際、chunkに分割されたファイルが配信サーバーから揮発したとき、
        ユーザーはそのリソースにアクセスできなくなります。ブラウザをリロードすることでユーザーは新しいリソースを取得できますが、
        フォーム入力の際にそれを強制されると入力内容も揮発します。

        これを避けるため、Service Workerによってブラウザにリソースのキャッシュをもたせ、ページを明示的に更新しない限り古いリソースにアクセスできるようにします。
      </p>
    </div>
  );
};

Top.displayName = "Top";

export default Top;
