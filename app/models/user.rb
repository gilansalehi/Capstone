class User < ActiveRecord::Base

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :session_token, uniqueness: true;

  after_initialize :ensure_session_token

  has_many :articles, class_name: "Article", foreign_key: :author_id

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user.is_password?(password) ? user : nil
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    provider = auth_hash[:provider]
    uid = auth_hash[:uid]

    user = User.find_by(provider: provider, uid: uid)

    if user
      return user
    else
      User.create(
        provider: provider,
        uid: uid,
        username: auth_hash[:info][:name],
        password: SecureRandom::urlsafe_base64
      )
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
