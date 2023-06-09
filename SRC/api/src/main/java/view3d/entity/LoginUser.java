package view3d.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * ログインユーザEntiryクラス
 */
@Entity
@Data
@Table(name = "login_user")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LoginUser implements Serializable {

	/** シリアルバージョンUID */
	private static final long serialVersionUID = 1L;

	/** ユーザID */
	@Id
	@Column(name = "user_id")
	private String userId;

	/** ログインID */
	@Column(name = "login_id")
	private String loginId;

	/** パスワード */
	@Column(name = "password")
	private String password;

	/** ロール */
	@Column(name = "role")
	private String role;
}
